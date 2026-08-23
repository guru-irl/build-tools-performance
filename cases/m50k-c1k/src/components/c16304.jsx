import React from 'react';
const LABEL_16304 = 'component_16304';
export function Component16304({ value = 16304, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16304, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16304, 'data-value': derived.doubled }, children);
}
export default Component16304;
