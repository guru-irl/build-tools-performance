import React from 'react';
const LABEL_20943 = 'component_20943';
export function Component20943({ value = 20943, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20943, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20943, 'data-value': derived.doubled }, children);
}
export default Component20943;
