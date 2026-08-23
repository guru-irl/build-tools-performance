import React from 'react';
const LABEL_40387 = 'component_40387';
export function Component40387({ value = 40387, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40387, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40387, 'data-value': derived.doubled }, children);
}
export default Component40387;
