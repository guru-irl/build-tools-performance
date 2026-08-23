import React from 'react';
const LABEL_5283 = 'component_5283';
export function Component5283({ value = 5283, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5283, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5283, 'data-value': derived.doubled }, children);
}
export default Component5283;
