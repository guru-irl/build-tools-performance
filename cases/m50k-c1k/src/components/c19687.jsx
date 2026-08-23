import React from 'react';
const LABEL_19687 = 'component_19687';
export function Component19687({ value = 19687, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19687, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19687, 'data-value': derived.doubled }, children);
}
export default Component19687;
