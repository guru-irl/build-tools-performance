import React from 'react';
const LABEL_11387 = 'component_11387';
export function Component11387({ value = 11387, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11387, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11387, 'data-value': derived.doubled }, children);
}
export default Component11387;
