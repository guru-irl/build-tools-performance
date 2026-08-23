import React from 'react';
const LABEL_18304 = 'component_18304';
export function Component18304({ value = 18304, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18304, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18304, 'data-value': derived.doubled }, children);
}
export default Component18304;
