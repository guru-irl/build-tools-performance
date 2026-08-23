import React from 'react';
const LABEL_4462 = 'component_4462';
export function Component4462({ value = 4462, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4462, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4462, 'data-value': derived.doubled }, children);
}
export default Component4462;
