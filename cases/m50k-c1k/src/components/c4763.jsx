import React from 'react';
const LABEL_4763 = 'component_4763';
export function Component4763({ value = 4763, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4763, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4763, 'data-value': derived.doubled }, children);
}
export default Component4763;
