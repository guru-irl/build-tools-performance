import React from 'react';
const LABEL_45406 = 'component_45406';
export function Component45406({ value = 45406, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45406, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45406, 'data-value': derived.doubled }, children);
}
export default Component45406;
