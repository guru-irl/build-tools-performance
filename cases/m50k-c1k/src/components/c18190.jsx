import React from 'react';
const LABEL_18190 = 'component_18190';
export function Component18190({ value = 18190, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18190, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18190, 'data-value': derived.doubled }, children);
}
export default Component18190;
