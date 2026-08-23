import React from 'react';
const LABEL_28042 = 'component_28042';
export function Component28042({ value = 28042, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28042, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28042, 'data-value': derived.doubled }, children);
}
export default Component28042;
