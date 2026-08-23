import React from 'react';
const LABEL_28667 = 'component_28667';
export function Component28667({ value = 28667, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28667, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28667, 'data-value': derived.doubled }, children);
}
export default Component28667;
