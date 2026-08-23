import React from 'react';
const LABEL_19788 = 'component_19788';
export function Component19788({ value = 19788, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19788, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19788, 'data-value': derived.doubled }, children);
}
export default Component19788;
