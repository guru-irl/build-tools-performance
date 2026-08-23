import React from 'react';
const LABEL_38224 = 'component_38224';
export function Component38224({ value = 38224, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38224, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38224, 'data-value': derived.doubled }, children);
}
export default Component38224;
