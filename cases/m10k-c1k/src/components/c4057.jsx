import React from 'react';
const LABEL_4057 = 'component_4057';
export function Component4057({ value = 4057, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4057, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4057, 'data-value': derived.doubled }, children);
}
export default Component4057;
