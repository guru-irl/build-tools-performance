import React from 'react';
const LABEL_31444 = 'component_31444';
export function Component31444({ value = 31444, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31444, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31444, 'data-value': derived.doubled }, children);
}
export default Component31444;
