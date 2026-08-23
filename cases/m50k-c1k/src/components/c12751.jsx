import React from 'react';
const LABEL_12751 = 'component_12751';
export function Component12751({ value = 12751, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12751, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12751, 'data-value': derived.doubled }, children);
}
export default Component12751;
