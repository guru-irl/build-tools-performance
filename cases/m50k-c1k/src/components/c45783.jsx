import React from 'react';
const LABEL_45783 = 'component_45783';
export function Component45783({ value = 45783, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45783, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45783, 'data-value': derived.doubled }, children);
}
export default Component45783;
