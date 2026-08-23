import React from 'react';
const LABEL_4998 = 'component_4998';
export function Component4998({ value = 4998, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4998, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4998, 'data-value': derived.doubled }, children);
}
export default Component4998;
