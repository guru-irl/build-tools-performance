import React from 'react';
const LABEL_19852 = 'component_19852';
export function Component19852({ value = 19852, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19852, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19852, 'data-value': derived.doubled }, children);
}
export default Component19852;
