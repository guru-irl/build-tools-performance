import React from 'react';
const LABEL_13190 = 'component_13190';
export function Component13190({ value = 13190, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13190, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13190, 'data-value': derived.doubled }, children);
}
export default Component13190;
