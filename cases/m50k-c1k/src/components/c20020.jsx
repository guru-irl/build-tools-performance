import React from 'react';
const LABEL_20020 = 'component_20020';
export function Component20020({ value = 20020, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20020, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20020, 'data-value': derived.doubled }, children);
}
export default Component20020;
