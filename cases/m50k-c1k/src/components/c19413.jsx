import React from 'react';
const LABEL_19413 = 'component_19413';
export function Component19413({ value = 19413, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19413, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19413, 'data-value': derived.doubled }, children);
}
export default Component19413;
