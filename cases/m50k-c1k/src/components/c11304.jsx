import React from 'react';
const LABEL_11304 = 'component_11304';
export function Component11304({ value = 11304, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11304, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11304, 'data-value': derived.doubled }, children);
}
export default Component11304;
