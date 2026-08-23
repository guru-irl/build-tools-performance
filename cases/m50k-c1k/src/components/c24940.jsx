import React from 'react';
const LABEL_24940 = 'component_24940';
export function Component24940({ value = 24940, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24940, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24940, 'data-value': derived.doubled }, children);
}
export default Component24940;
