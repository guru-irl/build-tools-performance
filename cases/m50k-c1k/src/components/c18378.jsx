import React from 'react';
const LABEL_18378 = 'component_18378';
export function Component18378({ value = 18378, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18378, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18378, 'data-value': derived.doubled }, children);
}
export default Component18378;
