import React from 'react';
const LABEL_45820 = 'component_45820';
export function Component45820({ value = 45820, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45820, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45820, 'data-value': derived.doubled }, children);
}
export default Component45820;
