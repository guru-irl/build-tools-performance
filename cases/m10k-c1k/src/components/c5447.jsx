import React from 'react';
const LABEL_5447 = 'component_5447';
export function Component5447({ value = 5447, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5447, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5447, 'data-value': derived.doubled }, children);
}
export default Component5447;
