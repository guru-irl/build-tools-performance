import React from 'react';
const LABEL_41987 = 'component_41987';
export function Component41987({ value = 41987, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41987, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41987, 'data-value': derived.doubled }, children);
}
export default Component41987;
