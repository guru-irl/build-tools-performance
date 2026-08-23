import React from 'react';
const LABEL_14518 = 'component_14518';
export function Component14518({ value = 14518, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14518, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14518, 'data-value': derived.doubled }, children);
}
export default Component14518;
