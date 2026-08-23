import React from 'react';
const LABEL_40142 = 'component_40142';
export function Component40142({ value = 40142, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40142, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40142, 'data-value': derived.doubled }, children);
}
export default Component40142;
