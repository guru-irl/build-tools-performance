import React from 'react';
const LABEL_45421 = 'component_45421';
export function Component45421({ value = 45421, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45421, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45421, 'data-value': derived.doubled }, children);
}
export default Component45421;
