import React from 'react';
const LABEL_5444 = 'component_5444';
export function Component5444({ value = 5444, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5444, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5444, 'data-value': derived.doubled }, children);
}
export default Component5444;
