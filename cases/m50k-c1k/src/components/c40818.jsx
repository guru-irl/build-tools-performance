import React from 'react';
const LABEL_40818 = 'component_40818';
export function Component40818({ value = 40818, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40818, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40818, 'data-value': derived.doubled }, children);
}
export default Component40818;
