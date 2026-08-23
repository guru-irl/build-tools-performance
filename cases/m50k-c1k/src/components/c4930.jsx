import React from 'react';
const LABEL_4930 = 'component_4930';
export function Component4930({ value = 4930, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4930, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4930, 'data-value': derived.doubled }, children);
}
export default Component4930;
