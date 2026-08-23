import React from 'react';
const LABEL_5696 = 'component_5696';
export function Component5696({ value = 5696, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5696, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5696, 'data-value': derived.doubled }, children);
}
export default Component5696;
