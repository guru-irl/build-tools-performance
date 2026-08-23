import React from 'react';
const LABEL_4387 = 'component_4387';
export function Component4387({ value = 4387, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4387, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4387, 'data-value': derived.doubled }, children);
}
export default Component4387;
