import React from 'react';
const LABEL_16940 = 'component_16940';
export function Component16940({ value = 16940, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16940, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16940, 'data-value': derived.doubled }, children);
}
export default Component16940;
