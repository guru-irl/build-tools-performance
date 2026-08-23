import React from 'react';
const LABEL_20144 = 'component_20144';
export function Component20144({ value = 20144, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20144, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20144, 'data-value': derived.doubled }, children);
}
export default Component20144;
