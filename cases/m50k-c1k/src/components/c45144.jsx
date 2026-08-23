import React from 'react';
const LABEL_45144 = 'component_45144';
export function Component45144({ value = 45144, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45144, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45144, 'data-value': derived.doubled }, children);
}
export default Component45144;
