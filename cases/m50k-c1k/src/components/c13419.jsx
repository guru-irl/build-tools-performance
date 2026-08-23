import React from 'react';
const LABEL_13419 = 'component_13419';
export function Component13419({ value = 13419, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13419, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13419, 'data-value': derived.doubled }, children);
}
export default Component13419;
