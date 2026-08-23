import React from 'react';
const LABEL_28225 = 'component_28225';
export function Component28225({ value = 28225, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28225, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28225, 'data-value': derived.doubled }, children);
}
export default Component28225;
