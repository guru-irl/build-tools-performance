import React from 'react';
const LABEL_33023 = 'component_33023';
export function Component33023({ value = 33023, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33023, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33023, 'data-value': derived.doubled }, children);
}
export default Component33023;
