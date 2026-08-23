import React from 'react';
const LABEL_19950 = 'component_19950';
export function Component19950({ value = 19950, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19950, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19950, 'data-value': derived.doubled }, children);
}
export default Component19950;
