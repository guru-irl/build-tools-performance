import React from 'react';
const LABEL_37420 = 'component_37420';
export function Component37420({ value = 37420, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37420, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37420, 'data-value': derived.doubled }, children);
}
export default Component37420;
