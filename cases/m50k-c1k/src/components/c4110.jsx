import React from 'react';
const LABEL_4110 = 'component_4110';
export function Component4110({ value = 4110, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4110, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4110, 'data-value': derived.doubled }, children);
}
export default Component4110;
