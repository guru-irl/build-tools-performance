import React from 'react';
const LABEL_4304 = 'component_4304';
export function Component4304({ value = 4304, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4304, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4304, 'data-value': derived.doubled }, children);
}
export default Component4304;
