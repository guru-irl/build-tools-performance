import React from 'react';
const LABEL_41420 = 'component_41420';
export function Component41420({ value = 41420, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41420, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41420, 'data-value': derived.doubled }, children);
}
export default Component41420;
