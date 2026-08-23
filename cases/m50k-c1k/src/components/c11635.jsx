import React from 'react';
const LABEL_11635 = 'component_11635';
export function Component11635({ value = 11635, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11635, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11635, 'data-value': derived.doubled }, children);
}
export default Component11635;
