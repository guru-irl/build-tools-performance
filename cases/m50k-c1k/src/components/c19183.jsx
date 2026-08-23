import React from 'react';
const LABEL_19183 = 'component_19183';
export function Component19183({ value = 19183, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19183, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19183, 'data-value': derived.doubled }, children);
}
export default Component19183;
