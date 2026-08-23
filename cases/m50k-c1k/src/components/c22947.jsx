import React from 'react';
const LABEL_22947 = 'component_22947';
export function Component22947({ value = 22947, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22947, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22947, 'data-value': derived.doubled }, children);
}
export default Component22947;
