import React from 'react';
const LABEL_4381 = 'component_4381';
export function Component4381({ value = 4381, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4381, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4381, 'data-value': derived.doubled }, children);
}
export default Component4381;
