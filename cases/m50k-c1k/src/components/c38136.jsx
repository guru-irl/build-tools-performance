import React from 'react';
const LABEL_38136 = 'component_38136';
export function Component38136({ value = 38136, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38136, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38136, 'data-value': derived.doubled }, children);
}
export default Component38136;
