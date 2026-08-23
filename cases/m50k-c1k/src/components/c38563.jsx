import React from 'react';
const LABEL_38563 = 'component_38563';
export function Component38563({ value = 38563, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38563, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38563, 'data-value': derived.doubled }, children);
}
export default Component38563;
