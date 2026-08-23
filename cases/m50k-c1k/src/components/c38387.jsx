import React from 'react';
const LABEL_38387 = 'component_38387';
export function Component38387({ value = 38387, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38387, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38387, 'data-value': derived.doubled }, children);
}
export default Component38387;
